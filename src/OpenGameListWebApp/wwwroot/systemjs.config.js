(function (global) {
    //map tells the System loader where to look for things
    var map = {
        'app': 'app',
        '@angular/core': 'js/@angular/core/bundles/core.umd.js',
        '@angular/common': 'js/@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'js/@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'js/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'js/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'js/@angular/http/bundles/http.umd.js',
        '@angular/router': 'js/@angular/router/bundles/router.umd.js',
        '@angular/forms': 'js/@angular/forms/bundles/forms.umd.js',
        'rxjs': 'js/rxjs',
        'angular-in-memory-web-api': 'js/in-memory-web-api.umd.js'
    };

    //packages tells the System loader which filename and/or extensions to look for by default (when none are specified)
    var packages = {
        'app': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    };

    //configure @angular packages
    //var ngPackageNames = [
    //    'common',
    //    'compiler', 
    //    'core',
    //    'http',
    //    'platform-browser',
    //    'platform-browser-dynamic',
    //    'upgrade'
    //];

    //function packIndex(pkgName) {
    //    packages['@angular/' + pkgName] = {
    //        main: 'index.js',
    //        defaultExtension: 'js'
    //    };
    //}

    //function packUmd(pkgName) {
    //    packages['@angular/' + pkgName] = {
    //        main: '/bundles' + pkgName + '.umd.js',
    //        defaultExtension: 'js'
    //    };
    //}

    //var setPackageConfig = true ? packIndex : packUmd;

    //ngPackageNames.forEach(setPackageConfig);

    var config = {
        map: map,
        packages:packages
    }

    System.config(config);
})(this);