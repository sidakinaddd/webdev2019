# Generated by Django 2.2 on 2019-04-15 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apikek', '0002_auto_20190415_1508'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='created_at',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='task',
            name='due_on',
            field=models.DateTimeField(),
        ),
    ]
