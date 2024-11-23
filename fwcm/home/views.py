from django.views.decorators.csrf import csrf_exempt
import requests
from bs4 import BeautifulSoup
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

@csrf_exempt  # Disable CSRF protection for simplicity (not recommended for production)
def fetch_page(request):
    if request.method == "GET":
        # Render an input form for the user to enter a URL
        return render(request, "fetch.html")

    elif request.method == "POST":
        url = request.POST.get("url")
        if not url:
            return HttpResponse("No URL provided", status=400)

        # Prepend 'http://' if not present to ensure the URL is valid
        if not url.startswith("http://") and not url.startswith("https://"):
            url = f"http://{url}"

        try:
            response = requests.get(url)
            response.raise_for_status()
        except requests.exceptions.RequestException as e:
            return HttpResponse(f"Failed to fetch the URL: {e}", status=400)

        # Respond with the fetched content
        content = response.text
        return HttpResponse(content, content_type=response.headers.get("Content-Type", "text/html"))


import requests
from bs4 import BeautifulSoup
from django.http import HttpResponse
from django.shortcuts import render, redirect
from urllib.parse import urlparse
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError


def url_form(request):
    if request.method == 'POST':
        target_url = request.POST.get('url', '').strip()
        parsed_url = urlparse(target_url)
        if not parsed_url.scheme:
            target_url = f'https://{target_url}'

        # Validate the URL
        validate = URLValidator()
        try:
            validate(target_url)
            request.session['target_url'] = target_url
            return redirect('view_page')
        except ValidationError:
            return render(request, 'url_form.html', {'error': 'Invalid URL format'})

    return render(request, 'url_form.html')


def view_page(request):
    # Retrieve the target URL from the session
    target_url = request.session.get('target_url')
    if not target_url:
        return redirect('url_form')  # Redirect to the form if no URL is in session

    try:
        # Fetch the HTML content of the target URL
        response = requests.get(target_url)
        response.raise_for_status()
        html_content = response.text

        # Parse HTML and fix asset links
        soup = BeautifulSoup(html_content, 'html.parser')

        # Rewrite CSS and JS links
        for tag in soup.find_all(['link', 'script']):
            attr = 'href' if tag.name == 'link' else 'src'
            if tag.has_attr(attr):
                asset_url = tag[attr]
                if not asset_url.startswith(('http://', 'https://')):
                    # Convert relative URLs to absolute
                    tag[attr] = requests.compat.urljoin(target_url, asset_url)

        # Rewrite image links
        for img_tag in soup.find_all('img'):
            if img_tag.has_attr('src'):
                img_tag['src'] = ''  # Replace all image sources with the cat image
                img_tag['srcset'] = ''  # Replace all image sources with the cat image

        # Remove href attributes from all <a> tags
        for a_tag in soup.find_all('a', href=True):
            a_tag['href'] = '#'  # Replace href with a non-navigational placeholder

        # Inject custom CSS to make all text transparent
        style_tag = soup.new_tag('style')
        style_tag.string = """
        .text {
            color: transparent;
        }
        body, body * {
            color: transparent !important;
            text-decoration: none !important;  /* Remove underlines or other text decorations */
        }
        /* Prevent any background highlight during selection */
        ::selection {
            background-color: transparent;
        }
        """
        title_tag = soup.new_tag('title')
        title_tag.string = "What's this page ?"  # Replace with the desired title
        # TODO : head to change tab text doesn't work
        if soup.head:
            soup.head.append(title_tag)
            soup.head.append(style_tag)
        else:
            # If no <head>, create one and add the style tag
            head_tag = soup.new_tag('head')
            head_tag.append(style_tag)
            soup.insert(0, head_tag)
            head_tag.append(title_tag)
            soup.insert(0, head_tag)

        # Serve the modified HTML
        return HttpResponse(soup.prettify(), content_type='text/html')

    except requests.exceptions.RequestException as e:
        return render(request, 'url_form.html', {'error': f"Error fetching URL: {str(e)}"})

