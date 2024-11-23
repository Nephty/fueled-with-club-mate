from django.urls import path
from . import views

urlpatterns = [
    path('', views.styled_html_view, name='styled_html'),
]
