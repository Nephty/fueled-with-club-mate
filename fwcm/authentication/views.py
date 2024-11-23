from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import is_valid_path

from .forms import RegistrationForm
from .models import Account


def register_view(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)

            next_url = request.GET.get('next', None)
            if next_url and is_valid_path(next_url):
                return redirect(next_url)
            else:
                return redirect('/')  # Redirect to the login page after successful registration
        else:
            return render(request, 'register.html', {'form': form})
    else:
        form = RegistrationForm()

    return render(request, 'register.html', {'form': form})


def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            next_url = request.GET.get('next', None)
            if next_url and is_valid_path(next_url):
                return redirect(next_url)
            else:
                return redirect('/')  # Redirect to the home page or any desired URL after successful login
        else:
            messages.error(request, 'Invalid username or password. Please try again.')

    return render(request, 'login.html')  # Create a login templates


def logout_view(request):
    logout(request)
    next_url = request.GET.get('next', None)
    if next_url and is_valid_path(next_url):
        if next_url == "/profile/": next_url = "/"
        return redirect(next_url)
    else:
        return redirect('/')
