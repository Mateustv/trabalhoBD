from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from app.views import home, store, register, formlogin, dologin, dashboard, logouts
from app.views import proprietario, create, view, edit, delete
from app.views import gestao, createGestao, viewGestao, editGestao, deleteGestao
from app.views import unidade, createUnidade, viewUnidade, editUnidade, deleteUnidade
from app.views import areacomum, createAreaComum, viewAreaComum, editAreaComum, deleteAreaComum
from app.views import ocorrencia, createOcorrencia, viewOcorrencia, editOcorrencia, deleteOcorrencia
from app.views import reuniao, createReuniao

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('register/', register),
    path('store/', store),
    path('formlogin/', formlogin, name='formlogin'),
    path('dologin/', dologin),
    path('dashboard/', dashboard, name='dashboard'),
    path('logouts/', logouts),
    path('proprietario/', proprietario, name="proprietario"),
    path('view/<str:cpf>', view, name='view'),
    path('create/', create, name='create'),
    path('edit/<str:cpf>', edit, name='edit'),
    path('delete/<str:cpf>', delete, name='delete'),
    path('gestao/', gestao, name='gestao'),
    path('createGestao/', createGestao, name='createGestao'),
    path('viewGestao/<int:id_gestao>', viewGestao, name='viewGestao'),
    path('editGestao/<int:id_gestao>', editGestao, name='editGestao'),
    path('deleteGestao/<int:id_gestao>', deleteGestao, name='deleteGestao'),
    path('unidade/', unidade, name='unidade'),
    path('createUnidade/', createUnidade, name='createUnidade'),
    path('viewUnidade/<int:id_unidade>', viewUnidade, name='viewUnidade'),
    path('editUnidade/<int:id_unidade>', editUnidade, name='editUnidade'),
    path('deleteUnidade/<int:id_unidade>', deleteUnidade, name='deleteUnidade'),
    path('areacomum/', areacomum, name="areacomum"),
    path('viewAreaComum/<int:id_area>', viewAreaComum, name='viewAreaComum'),
    path('createAreaComum/', createAreaComum, name='createAreaComum'),
    path('editAreaComum/<int:id_area>', editAreaComum, name='editAreaComum'),
    path('deleteAreaComum/<int:id_area>', deleteAreaComum, name='deleteAreaComum'),    
    path('ocorrencia/', ocorrencia, name='ocorrencia'),
    path('createOcorrencia/', createOcorrencia, name='createOcorrencia'),
    path('viewOcorrencia/<int:id_ocorrencia>', viewOcorrencia, name='viewOcorrencia'),
    path('editOcorrencia/<int:id_ocorrencia>', editOcorrencia, name='editOcorrencia'),
    path('deleteOcorrencia/<int:id_ocorrencia>', deleteOcorrencia, name='deleteOcorrencia'),
    path('reuniao/', reuniao, name="reuniao"),
    path('createReuniao/', createReuniao, name="createReuniao")
]


if settings.DEBUG: 
    urlpatterns += static(
        settings.MEDIA_URL, 
        document_root = settings.MEDIA_ROOT
    )