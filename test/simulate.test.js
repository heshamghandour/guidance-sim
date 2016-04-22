var test = require('tape');
var simulate = require('../index.js').simulate;

test('Tests simulate function', function (assert) {
  var map = {};
  var config = JSON.parse(JSON.stringify(require('./fixtures/configuration.v4.test.json')));
  var version = 'v4';

  map.setCenter = function (center) {
    assert.deepEqual(center, [ -105.585181, 40.365692 ], 'map.setCenter called with first coordinate in route linestring'); 
  };

  var response = simulate(map, config, version);
  var responses = [];
  map.easeTo = function (object) {
    if (responses.length < 5) {
      responses.push(object);
    } else {
      clearInterval(response.interval);
      easeToTest(responses);
    }
  };

  function easeToTest (responses) {
    var longitude0 = -105.585181;
    var latitude0 = 40.365692;
    var bearing0 = 0;
    assert.ok(Math.abs(responses[0].center[0] - longitude0) <= 0.0000001 && Math.abs(responses[0].center[1] - latitude0) <= 0.00001, 'map.easeTo called for step #1 with center within reasonable threshold of -122.148659,37.393936');
    assert.ok(Math.abs(responses[0].bearing - bearing0) <= 0.0000001, 'map.easeTo called for step #1 with bearing within reasonable threshold of 0');
    
    var longitude1 = -105.58522368847119;
    var latitude1 = 40.36559572388816;
    var bearing1 = -161.33319110806016;
    assert.ok(Math.abs(responses[1].center[0] - longitude1) <= 0.0000001 && Math.abs(responses[1].center[1] - latitude1) <= 0.00001, 'map.easeTo called for step #2 with center within reasonable threshold of -122.14871299509869,37.39404029840851');
    assert.ok(Math.abs(responses[1].bearing - bearing1) <= 0.0000001, 'map.easeTo called for step #2 with bearing within reasonable threshold of -22.357349789504433');
   
    var longitude2 = -105.58526530547272;
    var latitude2 = 40.365499157826925;
    var bearing2 = -161.82148821696262;
    assert.ok(Math.abs(responses[2].center[0] - longitude2) <= 0.0000001 && Math.abs(responses[2].center[1] - latitude2) <= 0.00001, 'map.easeTo called for step #3 with center within reasonable threshold of -122.14876699034768,37.3941445967925');
    assert.ok(Math.abs(responses[2].bearing - bearing2) <= 0.0000001, 'map.easeTo called for step #3 with bearing within reasonable threshold of -22.357382569658075');
    
    var longitude3 = -105.58529891525747;
    var latitude3 = 40.365401033898515;
    var bearing3 = -165.37325301232985;
    assert.ok(Math.abs(responses[3].center[0] - longitude3) <= 0.0000001 && Math.abs(responses[3].center[1] - latitude3) <= 0.00001, 'map.easeTo called for step #4 with center within reasonable threshold of -122.14882153750958,37.394248696427894');
    assert.ok(Math.abs(responses[3].bearing - bearing3) <= 0.0000001, 'map.easeTo called for step #4 with bearing within reasonable threshold of -22.60180112032371');
    
    var longitude4 = -105.585306;
    var latitude4 = 40.365309;
    var bearing4 = -176.64326532092917;
    assert.ok(Math.abs(responses[4].center[0] - longitude4) <= 0.0000001 && Math.abs(responses[4].center[1] - latitude4) <= 0.00001, 'map.easeTo called for step #4 with center within reasonable threshold of -122.1488791539064,37.39435178706674');
    assert.ok(Math.abs(responses[4].bearing - bearing4) <= 0.0000001, 'map.easeTo called for step #4 with bearing within reasonable threshold of -23.942618407309563');

    for (var i = 0; i < responses.length; i++) {
      assert.equal(responses[i].duration, 1000, 'map.easeTo called for each step with duration at 1000');
      assert.ok(35 < responses[i].pitch < 40, 'map.easeTo called for each step with pitch between 35 and 40');
      assert.ok(17 < responses[i].zoom < 17.5, 'map.easeTo called for each step with zoom between 17 and 17.5');
    }
  }

  assert.end();
});

test('Tests simulate function', function (assert) {
  var map = {};
  var config = JSON.parse(JSON.stringify(require('./fixtures/configuration.v5.test.json')));
  var version = 'v5';

  map.setCenter = function (center) {
    assert.deepEqual(center, [ -105.583769, 40.365675 ], 'map.setCenter called with first coordinate in route linestring');
  };

  var response = simulate(map, config, version);
  var responses = [];
  map.easeTo = function (object) {
    if (responses.length < 5) {
      responses.push(object);
    } else {
      clearInterval(response.interval);
      easeToTest(responses);
    }
  };

  function easeToTest (responses) {
    var longitude0 = -105.583769;
    var latitude0 = 40.365675;
    var bearing0 = 0;
    assert.ok(Math.abs(responses[0].center[0] - longitude0) <= 0.0000001 && Math.abs(responses[0].center[1] - latitude0) <= 0.00001, 'map.easeTo called for step #1 with center within reasonable threshold of -122.148659,37.393936');
    assert.ok(Math.abs(responses[0].bearing - bearing0) <= 0.0000001, 'map.easeTo called for step #1 with bearing within reasonable threshold of 0');
    
    var longitude1 = -105.5838439318794;
    var latitude1 = 40.365676362409125;
    var bearing1 = -88.6329770838254;
    assert.ok(Math.abs(responses[1].center[0] - longitude1) <= 0.0000001 && Math.abs(responses[1].center[1] - latitude1) <= 0.00001, 'map.easeTo called for step #2 with center within reasonable threshold of -122.14871299509869,37.39404029840851');
    assert.ok(Math.abs(responses[1].bearing - bearing1) <= 0.0000001, 'map.easeTo called for step #2 with bearing within reasonable threshold of -22.357349789504433');
   
    var longitude2 = -105.58391882532591;
    var latitude2 = 40.36567832752468;
    var bearing2 = -88.02763348689591;
    assert.ok(Math.abs(responses[2].center[0] - longitude2) <= 0.0000001 && Math.abs(responses[2].center[1] - latitude2) <= 0.00001, 'map.easeTo called for step #3 with center within reasonable threshold of -122.14876699034768,37.3941445967925');
    assert.ok(Math.abs(responses[2].bearing - bearing2) <= 0.0000001, 'map.easeTo called for step #3 with bearing within reasonable threshold of -22.357382569658075');
    
    var longitude3 = -105.58399368496539;
    var latitude3 = 40.36568082283482;
    var bearing3 = -87.49496514567676;
    assert.ok(Math.abs(responses[3].center[0] - longitude3) <= 0.0000001 && Math.abs(responses[3].center[1] - latitude3) <= 0.00001, 'map.easeTo called for step #4 with center within reasonable threshold of -122.14882153750958,37.394248696427894');
    assert.ok(Math.abs(responses[3].bearing - bearing3) <= 0.0000001, 'map.easeTo called for step #4 with bearing within reasonable threshold of -22.60180112032371');
    
    var longitude4 = -105.58406843278878;
    var latitude4 = 40.36568530592743;
    var bearing4 = -85.49912942979803;
    assert.ok(Math.abs(responses[4].center[0] - longitude4) <= 0.0000001 && Math.abs(responses[4].center[1] - latitude4) <= 0.00001, 'map.easeTo called for step #4 with center within reasonable threshold of -122.1488791539064,37.39435178706674');
    assert.ok(Math.abs(responses[4].bearing - bearing4) <= 0.0000001, 'map.easeTo called for step #4 with bearing within reasonable threshold of -23.942618407309563');

    for (var i = 0; i < responses.length; i++) {
      assert.equal(responses[i].duration, 1000, 'map.easeTo called for each step with duration at 1000');
      assert.ok(35 < responses[i].pitch < 40, 'map.easeTo called for each step with pitch between 35 and 40');
      assert.ok(17 < responses[i].zoom < 17.5, 'map.easeTo called for each step with zoom between 17 and 17.5');
    }
  }

  assert.end();
});

test('Tests simulate function', function (assert) {
  var map = {};
  var config = JSON.parse(JSON.stringify(require('./fixtures/configuration.v5.test.json')));
  config['spacing'] = 'acceldecel';
  var version = 'v5';

  map.setCenter = function (center) {
    assert.deepEqual(center, [ -105.583769, 40.365675 ], 'map.setCenter called with first coordinate in route linestring');
  };

  var response = simulate(map, config, version);
  var responses = [];
  map.easeTo = function (object) {
    if (responses.length < 5) {
      responses.push(object);
    } else {
      clearInterval(response.interval);
      easeToTest(responses);
    }
  };

  function easeToTest (responses) {
    var expected = 17 - ( 14.21082472218207 - 30 ) / 70;
    for (var i = 0; i < responses.length; i++) {
      assert.ok(Math.abs(expected - responses[i].zoom) < 0.0000001, 'Calculated zoom is within reasonable threshold of expected zoom');
    }
  }
  assert.end();
});
