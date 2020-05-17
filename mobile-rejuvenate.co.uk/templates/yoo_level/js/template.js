/* Copyright (C) 2007 - 2010 YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

jQuery(function($){
		
	/* Accordion menu */
	$('.menu-accordion').accordionMenu({ mode:'slide' });

	/* Dropdown menu */
	$('div#menu li.parent').dropdownMenu({ mode: 'height', transition: 'easeOutExpo'});
	
	/* Morph: main menu - level1 (tab) */
	var menuEnter = { 'color': '#dc3200' };
	var menuLeave = { 'color': '#323232' };

	switch (Warp.Settings.color) {
		case 'yellow':
			menuEnter = { 'color': '#bb8a01' };
			break;
		case 'pink':
			menuEnter = { 'color': '#834b94' };
			break;
		case 'turquoise':
			menuEnter = { 'color': '#3c8b9c' };
			break;
		case 'mossgreen':
			menuEnter = { 'color': '#829333' };
			break;
		case 'green':
			menuEnter = { 'color': '#6a9939' };
			break;
		case 'blue':
			menuEnter = { 'color': '#2f66a7' };
			break;
	}

	$('div#menu li.level1').morph(menuEnter, menuLeave,
		{ transition: 'swing', duration: 0, ignore: '.active' },
		{ transition: 'easeInSine', duration: 300 }, 'a.level1');

	$('div#menu li.level1').morph(menuEnter, menuLeave,
		{ transition: 'swing', duration: 0, ignore: '.active'},
		{ transition: 'easeInSine', duration: 300 }, 'span.subtitle');

	/* Morph: main menu - level2 and deeper (color) */
	var selector = '#menu li.level2 a, #menu li.level2 span.separator';
	
	$(selector).morph(menuEnter, menuLeave,
		{ transition: 'swing', duration: 0, ignore: '.active' },
		{ transition: 'easeInSine', duration: 300 });

	/* Morph: sub menu - level1 */
	$('div#middle ul.menu a, div#middle ul.menu span.separator').morph(menuEnter, menuLeave,
		{ transition: 'swing', duration: 0, ignore: '.active' },
		{ transition: 'easeInSine', duration: 300 });

	/* Smoothscroll */
	$('a[href="#page"]').smoothScroller({ duration: 500 });
	
	/* Match height of div tags */
	$('div.headerbox div.deepest').matchHeight(40);
	$('div.topbox div.deepest').matchHeight(40);
	$('div.bottombox div.deepest').matchHeight(40);
	$('div.maintopbox div.deepest').matchHeight(40);
	$('div.mainbottombox div.deepest').matchHeight(40);
	$('div.contenttopbox div.deepest').matchHeight(40);
	$('div.contentbottombox div.deepest').matchHeight(40);
		
});