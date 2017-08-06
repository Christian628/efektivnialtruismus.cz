# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-08-06 18:20
from __future__ import unicode_literals

from django.db import migrations
import wagtail.wagtailcore.blocks
import wagtail.wagtailcore.fields
import wagtail.wagtailembeds.blocks
import wagtail.wagtailimages.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('theses', '0010_thesisindexpage_propose'),
    ]

    operations = [
        migrations.AddField(
            model_name='thesisindexpage',
            name='header',
            field=wagtail.wagtailcore.fields.StreamField((('rawHtml', wagtail.wagtailcore.blocks.RawHTMLBlock()), ('heading', wagtail.wagtailcore.blocks.CharBlock(classname='full title')), ('paragraph', wagtail.wagtailcore.blocks.RichTextBlock()), ('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('embed', wagtail.wagtailembeds.blocks.EmbedBlock())), default=None),
            preserve_default=False,
        ),
    ]
