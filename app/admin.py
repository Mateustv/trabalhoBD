from django.contrib import admin
from .models import Proprietario, Gestao, Unidade, AreaComum ,Ocorrencia, Reuniao


# Register your models here.
admin.site.register(Proprietario),
admin.site.register(Gestao),
admin.site.register(Unidade),
admin.site.register(AreaComum),
admin.site.register(Ocorrencia),
admin.site.register(Reuniao),