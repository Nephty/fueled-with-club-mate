from django.http import HttpResponse
from .css_adder import add_style_to_html, get_html_from_url, get_style_tag, append_tag_to_head
from bs4 import BeautifulSoup
import random


pages = [
    "https://www.youtube.com/",
    # "https://twitter.com/",
    "https://www.linkedin.com/",
    "https://chatgpt.com/",
    "https://www.facebook.com/",
    "https://www.odoo.com/",
    "https://en.wikipedia.org/",
    "https://www.amazon.com/",
    "https://www.reddit.com/",
    "https://www.google.com/",
    "https://codenames.game/",
    "https://github.com/"
]


def styled_html_view(request):
    # URL of the page to fetch and modify
    page_url = random.choice(pages)
    page_url = pages[-1]

    html_content = get_html_from_url(page_url)
    if not html_content:
        return HttpResponse("Error fetching the page.", status=500)

    # Parse and modify the HTML
    soup = BeautifulSoup(html_content, 'html.parser')

    # Remove href attributes from all <a> tags
    for a_tag in soup.find_all('a', href=True):
        a_tag['href'] = '#'

    # Add style tag
    style_tag = soup.new_tag("style")
    style_tag.string = get_style_tag()
    append_tag_to_head(soup, style_tag)

    # Return the modified HTML as a response
    return HttpResponse(str(soup), content_type="text/html")