from bs4 import BeautifulSoup
import requests

def add_style_to_html(page_url, output_file):
    """
    Ajoute une balise <style> contenant des règles CSS dans le fichier HTML d'entrée.
    Applique une police BLOKK à tout le texte et ajoute des filtres flou et noir et blanc aux images et SVG.
    :param input_file: Chemin du fichier HTML d'entrée.
    :param output_file: Chemin du fichier HTML de sortie.
    """
    html_content = get_html_from_url(page_url)

    soup = BeautifulSoup(html_content, 'html.parser')

    # Remove href attributes from all <a> tags
    for a_tag in soup.find_all('a', href=True):
        a_tag['href'] = '#'

    style_tag = soup.new_tag("style")
    style_tag.string = get_style_tag()

    append_tag_to_head(soup, style_tag)

    with open(output_file, 'w', encoding='utf-8') as file:
        file.write(str(soup))


def get_style_tag():
    return """
    @font-face {
        font-family: 'BLOKKNeue';
        src: url('/static/fonts/BLOKKNeue-Regular.ttf') format('truetype');
    }
    * {
        font-family: 'BLOKKNeue' !important;
        src: url('/static/fonts/BLOKKNeue-Regular.ttf') format('truetype');
        filter: grayscale(100%);
        pointer-events: none;
    }
    img {
        filter: blur(30px) grayscale(100%);
    }
    svg {
        filter: blur(5px) grayscale(100%);
    }
    span {
        font-family: 'BLOKKNeue', sans-serif !important;
        text: transparent;
    }
    input {
        text: transparent;
    }
    """


def append_tag_to_head(soup, tag):
    """
    Verifies if the <head> tag exists. If it doesn't, it creates the head tag.
    It then appends the given tag to the head tag.
    """
    if soup.head:
        soup.head.append(tag)
    else:
        head_tag = soup.new_tag("head")
        head_tag.append(tag)
        soup.insert(0, head_tag)


def get_html_from_url(url):
    """
    Fetches the HTML content of a webpage using requests.Session.
    :param url: URL of the webpage to fetch.
    :return: HTML content of the page or an error if the request fails.
    """
    try:
        with requests.Session() as session:
            response = session.get(url)
            response.raise_for_status()
            return response.text

    except requests.exceptions.RequestException as e:
        print(f"Error while fetching {url}: {e}")
        return None


# Exemple d'utilisation
if __name__ == "__main__":
    output_html_file = "out.html"
    page_url = "https://www.youtube.com"

    add_style_to_html(page_url, output_html_file)
