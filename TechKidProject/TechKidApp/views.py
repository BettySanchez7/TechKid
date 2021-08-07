from django.shortcuts import render
from django.http import HttpResponse

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