from bs4 import BeautifulSoup

def add_style_to_html(input_file, output_file):
    """
    Ajoute une balise <style> contenant des règles CSS dans le fichier HTML d'entrée.
    Applique une police BLOKK à tout le texte et ajoute des filtres flou et noir et blanc aux images et SVG.
    :param input_file: Chemin du fichier HTML d'entrée.
    :param output_file: Chemin du fichier HTML de sortie.
    """
    with open(input_file, 'r', encoding='utf-8') as file:
        html_content = file.read()

    soup = BeautifulSoup(html_content, 'html.parser')

    # Remove href attributes from all <a> tags
    for img_tag in soup.find_all('img'):
        for a_tag in soup.find_all('a', href=True):
            a_tag['href'] = '#'

    style_tag = soup.new_tag("style")
    style_tag.string = get_style_tag()

    append_tag_to_head(soup, style_tag)

    # Écrit le HTML modifié dans un fichier de sortie
    with open(output_file, 'w', encoding='utf-8') as file:
        file.write(str(soup))


def get_style_tag():
    return """
    @font-face {
        font-family: 'BLOKK';
        src: url('font/BLOKKNeue-Regular.ttf') format('truetype');
    }
    * {
        font-family: 'BLOKK', sans-serif !important;
    }
    img {
        filter: blur(30px) grayscale(100%);
    }
    svg {
        filter: blur(5px) grayscale(100%);
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


# Exemple d'utilisation
if __name__ == "__main__":
    input_html_file = "linkedin.html"
    output_html_file = "linkedin_css.html"

    add_style_to_html(input_html_file, output_html_file)

    print(f"Le fichier modifié a été sauvegardé sous : {output_html_file}")
