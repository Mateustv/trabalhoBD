from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from app.models import Proprietario, Gestao, Unidade, AreaComum, Ocorrencia, Reuniao
from app.forms import ProprietarioForm, GestaoForm, AreaComumForm, ReuniaoForm, UnidadeForm, OcorrenciaForm, Reuniao
from django.contrib import messages
from django.core.paginator import Paginator


# Create your views here.


# Página Inicial Cadastro/Login
def home(request):
    return render(request, 'login/home.html')


# Formulário Cadastro Usuário
def register(request):
    return render(request, 'login/register.html')


# Inserção dos dados do usuário no banco de dados
def store(request):
    data = {}
    if(request.POST['password'] != request.POST['password-conf']):
        data['msg'] = 'As senhas digitadas são diferentes!'
        data['class'] = 'alert-danger'
    else:
        user = User.objects.create_user(request.POST['user'], request.POST['email'], request.POST['password'])
        user.first_name = request.POST['name']
        user.save()
        data['msg'] = 'Usuário cadastrado com sucesso!'
        data['class'] = 'alert-success'
    return render(request, 'login/register.html', data)


# Formulário de Login
def formlogin(request):
    return render(request, 'login/formlogin.html')


# Autenticação do Login
def dologin(request):
    data = {}
    user = authenticate(username=request.POST['user'], password=request.POST['password'])
    if user is not None:
        login(request, user)
        return redirect('/dashboard/')
    else:
        data['msg'] = 'Usuário ou Senha inválidos!'
        data['class'] = 'alert-danger'
        return render(request, 'login/formlogin.html', data)


# Logout do Sistema
def logouts(request):
    logout(request)
    return redirect('/formlogin/')


# Página Inicial do Dashboard
def dashboard(request):
          
    return render(request, 'dashboard/index.html')

# Proprietário

def proprietario(request):
    
    search = request.GET.get('search')
    
    if search:
        
        proprietarios = Proprietario.objects.filter(nome__icontains=search)
        
    else:
        
        proprietarios_list = Proprietario.objects.all().order_by('nome')
        
        paginator = Paginator(proprietarios_list, 5)
        page = request.GET.get('page')
        proprietarios = paginator.get_page(page)
        
    return render(request, 'proprietario/index.html', {'proprietarios': proprietarios})

# View (read)
def view(request, cpf):
    view = get_object_or_404(Proprietario, pk=cpf)
    return render(request, 'proprietario/view.html', {'view': view})

# Create
def create(request):
    if request.method == 'POST':
        form = ProprietarioForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/proprietario/')
    else:
        form = ProprietarioForm()
        return render(request, 'proprietario/create.html', {'form': form})
    
# Edit (update)
def edit(request, cpf):
    edit = get_object_or_404(Proprietario, pk=cpf)
    form = ProprietarioForm(instance=edit)
    
    if request.method == 'POST':
        form = ProprietarioForm(request.POST, instance=edit)
        
        if form.is_valid():
            form.save()
            return redirect('/proprietario/')
        else:
            return render(request, 'proprietario/edit.html', {'form': form, 'edit': edit})
    
    else: 
        return render(request, 'proprietario/edit.html', {'form': form, 'edit': edit})
    

# Delete
def delete(request, cpf):
    delete = get_object_or_404(Proprietario, pk=cpf)
    delete.delete()
    
    messages.info(request, 'Proprietário Deletado com Sucesso!')

    return redirect('/proprietario/')


# Gestão
def gestao(request):
    
    search = request.GET.get('search')
    
    if search:
        
        gestoes = Gestao.objects.filter(nome__icontains=search)
        
    else:
        
        gestoes_list = Gestao.objects.all().order_by('nome')
        
        paginator = Paginator(gestoes_list, 5)
        page = request.GET.get('page')
        gestoes = paginator.get_page(page)
        
    return render(request, 'gestao/index.html', {'gestoes': gestoes})

# View (read)
def viewGestao(request, id_gestao):
    view = get_object_or_404(Gestao, pk=id_gestao)
    return render(request, 'gestao/view.html', {'view': view})

# Create
def createGestao(request):
    if request.method == 'POST':
        form = GestaoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('/gestao/')
    else:
        form = GestaoForm()
        return render(request, 'gestao/create.html', {'form': form})
    
# Edit (update)
def editGestao(request, id_gestao):
    edit = get_object_or_404(Gestao, pk=id_gestao)
    form = GestaoForm(instance=edit)
    
    if request.method == 'POST':
        form = GestaoForm(request.POST, request.FILES, instance=edit)
        
        if form.is_valid():
            form.save()
            return redirect('/gestao/')
        else:
            return render(request, 'gestao/edit.html', {'form': form, 'edit': edit})
    
    else: 
        return render(request, 'gestao/edit.html', {'form': form, 'edit': edit})
    

# Delete
def deleteGestao(request, id_gestao):
    delete = get_object_or_404(Gestao, pk=id_gestao)
    delete.delete()
    
    messages.info(request, 'Gestão Deletada com Sucesso!')

    return redirect('/gestao/') #fim


# Unidade
def unidade(request):
    
    search = request.GET.get('search')
    
    if search:
        
        unidades = Unidade.objects.filter(numero__icontains=search)
        
    else:
        
        unidades_list = Unidade.objects.all().order_by('bloco')
        
        paginator = Paginator(unidades_list, 5)
        page = request.GET.get('page')
        unidades = paginator.get_page(page)
        
    return render(request, 'unidade/index.html', {'unidades': unidades})

# Create Unidade

def createUnidade(request):
    if request.method == 'POST':
        form = UnidadeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/unidade/')
    else:
        form = UnidadeForm()
        return render(request, 'unidade/create.html', {'form': form})
   
def viewUnidade(request, id_unidade):
    view = get_object_or_404(Unidade, pk=id_unidade)
    return render(request, 'unidade/view.html', {'view': view})

# Edit (update) Unidade
def editUnidade(request, id_unidade):
    edit = get_object_or_404(Unidade, pk=id_unidade)
    form = UnidadeForm(instance=edit)
    
    if request.method == 'POST':
        form = UnidadeForm(request.POST, instance=edit)
        
        if form.is_valid():
            form.save()
            return redirect('/unidade/')
        else:
            return render(request, 'unidade/edit.html', {'form': form, 'edit': edit})
    
    else: 
        return render(request, 'unidade/edit.html', {'form': form, 'edit': edit})
    

# Delete Unidade
def deleteUnidade(request, id_unidade):
    delete = get_object_or_404(Unidade, pk=id_unidade)
    delete.delete()
    
    messages.info(request, 'Unidade Deletada com Sucesso!')

    return redirect('/unidade/')


# Área Comum
def areacomum(request):
    
    search = request.GET.get('search')
    
    if search:
        
        areascomuns = AreaComum.objects.filter(nome__icontains=search)
        
    else:
        
        areascomuns_list = AreaComum.objects.all().order_by('nome')
        
        paginator = Paginator(areascomuns_list, 5)
        page = request.GET.get('page')
        areascomuns = paginator.get_page(page)
        
    return render(request, 'areacomum/index.html', {'areascomuns': areascomuns})

# View (read)
def viewAreaComum(request, id_area):
    view = get_object_or_404(AreaComum, pk=id_area)
    return render(request, 'areacomum/view.html', {'view': view})

# Create
def createAreaComum(request):
    if request.method == 'POST':
        form = AreaComumForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/areacomum/')
    else:
        form = AreaComumForm()
        return render(request, 'areacomum/create.html', {'form': form})
    
# Edit (update)
def editAreaComum(request, id_area):
    edit = get_object_or_404(AreaComum, pk=id_area)
    form = AreaComumForm(instance=edit)
    
    if request.method == 'POST':
        form = AreaComumForm(request.POST, instance=edit)
        
        if form.is_valid():
            form.save()
            return redirect('/areacomum/')
        else:
            return render(request, 'areacomum/edit.html', {'form': form, 'edit': edit})
    
    else: 
        return render(request, 'areacomum/edit.html', {'form': form, 'edit': edit})
    

# Delete
def deleteAreaComum(request, id_area):
    delete = get_object_or_404(AreaComum, pk=id_area)
    delete.delete()
    
    messages.info(request, 'Área Comum Deletada com Sucesso!')

    return redirect('/areacomum/') #fim

# Ocorrência
def ocorrencia(request):
    search = request.GET.get('search')
    
    if search:
        
        ocorrencias = Ocorrencia.objects.filter(titulo__icontains=search)
        
    else:
        
        ocorrencias_list = Ocorrencia.objects.all().order_by('id_ocorrencia')
        
        paginator = Paginator(ocorrencias_list, 5)
        page = request.GET.get('page')
        ocorrencias = paginator.get_page(page)
        
    return render(request, 'ocorrencia/index.html', {'ocorrencias': ocorrencias})

#create Ocorrência
def createOcorrencia(request):
    if request.method == 'POST':
        form = OcorrenciaForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('/ocorrencia/')
    else:
        form = OcorrenciaForm()
        return render(request, 'ocorrencia/create.html', {'form': form})
   
# View (update) Ocorrencia
def viewOcorrencia(request, id_ocorrencia):
    view = get_object_or_404(Ocorrencia, pk=id_ocorrencia)
    return render(request, 'ocorrencia/view.html', {'view': view})

# Edit (update) Ocorrencia
def editOcorrencia(request, id_ocorrencia):
    edit = get_object_or_404(Ocorrencia, pk=id_ocorrencia)
    form = OcorrenciaForm(instance=edit)
    
    if request.method == 'POST':
        form = OcorrenciaForm(request.POST, request.FILES, instance=edit)
        
        if form.is_valid():
            form.save()
            return redirect('/ocorrencia/')
        else:
            return render(request, 'ocorrencia/edit.html', {'form': form, 'edit': edit})
    
    else: 
        return render(request, 'ocorrencia/edit.html', {'form': form, 'edit': edit})
    

# Delete Ocorrencia
def deleteOcorrencia(request, id_ocorrencia):
    delete = get_object_or_404(Ocorrencia, pk=id_ocorrencia)
    delete.delete()
    
    messages.info(request, 'Ocorrência Deletada com Sucesso!')

    return redirect('/ocorrencia/')


# Reunião

def reuniao(request):
    search = request.GET.get('search')
    
    if search:
        
        reunioes = Reuniao.objects.filter(data__icontains=search)
        
    else:
        
        reunioes_list = Reuniao.objects.all().order_by('id_reuniao')
        
        paginator = Paginator(reunioes_list, 5)
        page = request.GET.get('page')
        reunioes = paginator.get_page(page)
        
    return render(request, 'reuniao/index.html', {'reunioes': reunioes})

# Create Reunião
def createReuniao(request):
    if request.method == 'POST':
        form = ReuniaoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/reuniao/')
    else:
        form = ReuniaoForm()
        return render(request, 'reuniao/create.html', {'form': form})
