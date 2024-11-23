from bs4 import BeautifulSoup

def add_style_to_html(input_file, output_file):
    """
    Ajoute une balise <style> contenant des règles CSS dans le fichier HTML d'entrée.
    Applique une police BLOKK à tout le texte et ajoute des filtres flou et noir et blanc aux images et SVG.
    :param input_file: Chemin du fichier HTML d'entrée.
    :param output_file: Chemin du fichier HTML de sortie.
    """
    # Ouvre et lit le fichier HTML
    with open(input_file, 'r', encoding='utf-8') as file:
        html_content = file.read()
    
    # Parse le contenu HTML avec BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')

    for img_tag in soup.find_all('img'):
        # Remove href attributes from all <a> tags
        for a_tag in soup.find_all('a', href=True):
            a_tag['href'] = '#'  # Replace href with a non-navigational placeholder

    # Le CSS à ajouter
    css_content = """
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

    # Crée une balise <style> et ajoute le CSS
    style_tag = soup.new_tag("style")
    style_tag.string = css_content

    # Vérifie si la balise <head> existe, sinon la crée
    if soup.head:
        soup.head.append(style_tag)
    else:
        # Si il n'y a pas de balise <head>, on la crée
        head_tag = soup.new_tag("head")
        head_tag.append(style_tag)
        soup.insert(0, head_tag)

    # Écrit le HTML modifié dans un fichier de sortie
    with open(output_file, 'w', encoding='utf-8') as file:
        file.write(str(soup))


# Exemple d'utilisation
if __name__ == "__main__":
    input_html_file = "linkedin.html"  # Remplacez par le chemin de votre fichier HTML
    output_html_file = "linkedin_css.html"  # Remplacez par le chemin de votre fichier HTML de sortie

    # Appel de la fonction pour ajouter le style au fichier HTML
    add_style_to_html(input_html_file, output_html_file)

    print(f"Le fichier modifié a été sauvegardé sous : {output_html_file}")
