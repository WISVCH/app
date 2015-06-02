Router.configure({ layoutTemplate: 'layout' });

Router.route('/', function () { this.render('hello'); });
Router.route('/events', function () { this.render('page-events'); });
Router.route('/data', function () { this.render('page-data'); });
Router.route('/choice', function () { this.render('page-choice'); });
Router.route('/pub', function () { this.render('page-pub'); });
Router.route('/settings', function () { this.render('page-settings'); });