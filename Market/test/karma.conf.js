module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'Repository.js',
      'Repositories/*.js',
      'Storage.js',
      'Factories/*.js',
      'test/repositorySpec.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};