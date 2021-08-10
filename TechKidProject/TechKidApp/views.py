from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView
#from django.core.urlresolvers import reverse_lazy
from django.urls import reverse
from TechKidApp.forms import RegistroForm

class RegistroUsuario(CreateView):
	model = User
	template_name = "TechKidApp/registro.html"
	form_class = RegistroForm
	success_url = '/registro/'


# Create your views here.


def home(request):
    
    return render(request, "TechKidApp/home.html")

def contacto(request):
    
    return render(request, "TechKidApp/contacto.html")

def cursos(request):
    
    return render(request, "TechKidApp/cursos.html")

def registro(request):
    
    return render(request, "TechKidApp/registro.html")

def sesion(request):
    
    return render(request, "TechKidApp/sesion.html")

from django.shortcuts import render
from django.contrib.auth.views import (
    LoginView,
)

class login_view(LoginView):
    # The line below overrides the default template path of <appname>/<modelname>_login.html
    template_name = 'TechKidApp/sesion.html'