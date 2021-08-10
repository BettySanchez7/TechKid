from django.urls import path

##importar vistas de mi proyecto
from TechKidApp import views


urlpatterns = [
    path('', views.home, name="home"),
    path('contacto/', views.contacto, name="contacto"),
    path('cursos/', views.cursos, name="cursos"),
    path('registro/', views.RegistroUsuario.as_view(), name="registro"),
    path('sesion/', views.login_view.as_view(), name="sesion"),
    
]