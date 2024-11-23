from django.urls import path
from django.views.generic import RedirectView
from . import views

urlpatterns = [
    path('', views.url_form, name='url_form'),
    path('view/', views.view_page, name='view_page'),
    path('', RedirectView.as_view(url='/home')),
]
