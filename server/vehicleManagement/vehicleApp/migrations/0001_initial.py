# Generated by Django 5.0.7 on 2024-07-23 09:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_name', models.CharField(max_length=100)),
                ('phone', models.IntegerField()),
                ('vehicle_no', models.CharField(max_length=100)),
                ('date', models.DateField(auto_now_add=True)),
                ('image', models.ImageField(upload_to='media')),
                ('status', models.CharField(default='pending', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Services',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=200)),
                ('price', models.PositiveIntegerField()),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vehicleApp.customer')),
            ],
        ),
    ]
