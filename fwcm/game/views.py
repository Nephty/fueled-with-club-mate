from django.shortcuts import render
import random

static_pages = [
    "amazon", "odoo", "linkedin", "youtube", "wikipedia", "chatgpt", "reddit", "google"
]

working_pages = [
    "odoo", "linkedin", "youtube", "wikipedia", "reddit", "yahoo", "pinterest", "discord", "twitch", "spotify"
]

def dynamic_game_view(request):
    page = random.choice(working_pages)
    print(page)
    html = f'http://127.0.0.1:8000/serve?page={page}'
    return render(request, 'game.html', {'html': html, 'answer': page})

def static_game_view(request):
    page = random.choice(static_pages)
    print(page)
    html = f'https://harbiinger.xyz/static_websites/{page}_rendered.html'
    return render(request, 'game.html', {'html': html, 'answer': page})
