# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-01-05 06:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LMS', '0012_paperques'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paper',
            name='questions',
            field=models.ManyToManyField(blank=True, to='LMS.PaperQues'),
        ),
    ]
