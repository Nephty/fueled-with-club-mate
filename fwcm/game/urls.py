from django.urls import path
from . import views

urlpatterns = [
    path('game', views.static_game_view, name='game'),
    path('dynamic', views.dynamic_game_view, name='dynamic'),
]
