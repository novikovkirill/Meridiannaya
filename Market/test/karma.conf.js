module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'Storage.js',
      'Repository.js',
      'Repositories/ShopRepository.js',
      'Repositories/ProductRepository.js',
      'Repositories/ClientRepository.js',
      'Repositories/OrderRepository.js',
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