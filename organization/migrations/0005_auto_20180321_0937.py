# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-21 09:37
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0004_auto_20180309_1005'),
    ]

    operations = [
        migrations.AlterField(
            model_name='division',
            name='contacts',
            field=models.ManyToManyField(related_name='divisionsHeading', to=settings.AUTH_USER_MODEL),
        ),
    ]
