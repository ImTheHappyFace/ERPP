# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2020-01-07 07:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0004_todo_details'),
    ]

    operations = [
        migrations.CreateModel(
            name='client',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40, null=True)),
                ('mobile', models.CharField(max_length=40, null=True)),
                ('message', models.CharField(max_length=40, null=True)),
            ],
        ),
    ]
