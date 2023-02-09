from django.forms import ModelForm
from django import forms
from app.models import Proprietario, Gestao, Reuniao, AreaComum, Unidade, Ocorrencia

# Create the form class.

class ProprietarioForm(forms.ModelForm):
    
    class Meta:
        model = Proprietario
        fields = ('cpf', 'nome', 'telefone', 'email', 'dt_nasc', 'cargo')
        
class GestaoForm(forms.ModelForm):
    
    class Meta:
        model = Gestao
        fields = ['id_gestao', 'nome', 'dt_inicio', 'dt_fim', 'atos', 'estatuto', 'sindico', 'subsindico']

class UnidadeForm(forms.ModelForm):
    
    class Meta:
        model = Unidade
        fields = ('bloco', 'numero', 'vaga', 'placa', 'proprietario')

class AreaComumForm(forms.ModelForm):
    
    class Meta:
        model = AreaComum
        fields = ('id_area', 'nome', 'regras', 'capacidade')

class OcorrenciaForm(forms.ModelForm):
    
    class Meta:
        model = Ocorrencia
        fields = ('id_ocorrencia','titulo', 'descricao', 'nome', 'data', 'hora', 'arquivo', 'id_unidade', 'id_area', 'id_gestao')


class ReuniaoForm(forms.ModelForm):
    
    class Meta:
        model = Reuniao
        fields = ('data', 'hora', 'pauta', 'local', 'relatorio', 'presenca')