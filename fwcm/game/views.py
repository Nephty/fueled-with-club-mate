from django.shortcuts import render
import random

def dynamic_game_view(request):
    html = 'http://127.0.0.1:8000/serve'
    return render(request, 'game.html', {'html': html})

def static_game_view(request):
    pages = [
            "amazon", "odoo", "linkedin", "youtube", "wikipedia", "chatgpt", "reddit", "google"
    ]
    page = random.choice(pages)
    html = f'https://harbiinger.xyz/static_websites/{page}_rendered.html'
    return render(request, 'game.html', {'html': html})
