it('should check ng-options', function() {
    expect(element(by.binding('{selected_color:myColor}')).getText()).toMatch('red');
    element.all(by.model('myColor')).first().click();
    element.all(by.css('select[ng-model="myColor"] option')).first().click();
    expect(element(by.binding('{selected_color:myColor}')).getText()).toMatch('black');
    element(by.css('.nullable select[ng-model="myColor"]')).click();
    element.all(by.css('.nullable select[ng-model="myColor"] option')).first().click();
    expect(element(by.binding('{selected_color:myColor}')).getText()).toMatch('null');
});

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/