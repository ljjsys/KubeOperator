# Generated by Django 2.1.2 on 2019-02-14 03:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('openshift_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cluster',
            name='current_task_id',
            field=models.CharField(blank=True, default='', max_length=128),
        ),
    ]
