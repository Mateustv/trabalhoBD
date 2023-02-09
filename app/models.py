from django.db import models

# Create your models here.

class Proprietario(models.Model):
    
    CARGO = {
        ('Morador', 'Morador'),
        ('Síndico', 'Síndico'),
        ('Sub-Síndico', 'Sub-Síndico'),
    }
    
    cpf = models.CharField(max_length=11, unique=True, primary_key=True, verbose_name="CPF")
    nome = models.CharField(max_length=120)
    telefone = models.CharField(max_length=20)
    email = models.CharField(max_length=60)
    dt_nasc = models.DateField(null=True, verbose_name="Data de Nascimento")
    cargo = models.CharField(
        max_length=15,
        choices=CARGO,
        verbose_name="Status",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.nome
    
class Gestao(models.Model):
    id_gestao = models.AutoField(unique=True, primary_key=True, verbose_name="id_gestao")
    nome = models.CharField(max_length=150)
    dt_inicio = models.DateField(null=True, verbose_name="Data Início")
    dt_fim = models.DateField(null=True, verbose_name="Data Fim")
    atos = models.TextField()
    estatuto = models.FileField(blank=True, upload_to='')
    
    sindico = models.ForeignKey("Proprietario", on_delete=models.CASCADE, related_name='sindico')
    subsindico = models.ForeignKey("Proprietario", on_delete=models.CASCADE, related_name='subsindico')
    
    def __str__(self):
        return self.nome

class Unidade(models.Model):
    id_unidade = models.AutoField(unique=True, primary_key=True)
    bloco = models.CharField(max_length=10)
    numero = models.CharField(max_length=10)
    vaga = models.CharField(max_length=10)
    placa = models.CharField(max_length=7)
    proprietario = models.ForeignKey("Proprietario", on_delete=models.CASCADE, related_name='unidade')



class AreaComum(models.Model):
    
    id_area = models.AutoField(unique=True, primary_key=True, verbose_name="id_area")
    nome = models.CharField(max_length=120)
    regras = models.TextField()
    capacidade = models.CharField(max_length=60)
    
    def __str__(self):
        return self.nome

class Ocorrencia(models.Model):
    id_ocorrencia = models.AutoField(unique=True, primary_key=True)
    titulo = models.CharField(null=True, max_length=150)
    descricao = models.TextField()
    nome = models.CharField(null=True, max_length=100)
    data = models.DateField(null=True, verbose_name="Data da Ocorrência")
    hora = models.TimeField(null=True, verbose_name="Horário da Ocorrência")
    arquivo = models.FileField(blank=True, upload_to='')
    
    id_unidade = models.ForeignKey("Unidade", on_delete=models.CASCADE, related_name='unidade')
    id_area = models.ForeignKey("AreaComum", on_delete=models.CASCADE, related_name='areacomum')
    id_gestao = models.ForeignKey("Gestao", on_delete=models.CASCADE, related_name='gestao')

    def __str__(self):
        return self.titulo
    

class Reuniao(models.Model):
    id_reuniao = models.AutoField(unique=True, primary_key=True)
    data = models.DateField(null=True, verbose_name="Data da Reunião")
    hora = models.TimeField(null=True, verbose_name="Horário da Reunião")
    pauta = models.TextField()
    local = models.CharField(max_length=60)
    relatorio = models.FileField(upload_to='pdf/')
    presenca = models.ManyToManyField("Proprietario")
    
    def __str__(self):
        return self.pauta
    
    
class PresencaReuniao(models.Model):
    nome = models.CharField(max_length=120)
    obs = models.TextField(blank=True)
    presenca = models.ForeignKey("Reuniao", on_delete=models.CASCADE, related_name="reuniao")
    
    