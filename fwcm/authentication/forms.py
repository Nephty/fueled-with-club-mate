from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import Account

class RegistrationForm(UserCreationForm):
    class Meta:
        model = Account
        fields = ['username', 'password1', 'password2']
