var app = angular.module('companyApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController',
    })
    .when('/projects', {
      templateUrl: 'projects.html',
      controller: 'ProjectsController',
    })
    .when('/missions', {
      templateUrl: 'missions.html',
      controller: 'MissionsController',
    })
    .when('/goals', {
      templateUrl: 'goals.html',
      controller: 'GoalsController',
    })
    .when('/leadership', {
      templateUrl: 'leadership.html',
      controller: 'LeadershipController',
    })
    .when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactController',
    })
    .otherwise({
      redirectTo: '/',
    });
});

app.controller('HomeController', function ($scope) {
  $scope.message = 'Innovative Enterprise Solutions from a Fast-Growing Technology Partner';
  $scope.description =
    "InfoTech Synergy is a dynamic young company delivering cutting-edge enterprise solutions. With over $500K in revenue and 3+ satisfied enterprise clients, we're proving that agile, innovative approaches deliver better results.";
});

app.controller('ProjectsController', function ($scope) {
  $scope.projects = [
    {
      title: 'E-Commerce Digital Transformation',
      description:
        "Revolutionized a growing retail client's online presence with a modern e-commerce platform. Our agile approach and innovative solutions led to significant improvements in performance and sales.",
      metrics: {
        improvement: 40,
        timeframe: '8 weeks',
      },
    },
    {
      title: 'Healthcare Analytics Platform',
      description:
        'Developed a custom analytics solution for a regional healthcare provider, enabling data-driven decision making and improving patient care efficiency.',
      metrics: {
        improvement: 35,
        timeframe: '12 weeks',
      },
    },
    {
      title: 'Cloud Infrastructure Optimization',
      description:
        'Implemented a cost-effective cloud solution for a fintech startup, resulting in improved system reliability and significant cost savings.',
      metrics: {
        improvement: 30,
        timeframe: '6 weeks',
      },
    },
  ];
});

app.controller('MissionsController', function ($scope) {
  $scope.missions = [
    {
      title: 'Agile Innovation',
      description:
        'As a young company, we bring fresh perspectives and rapid innovation to enterprise solutions, delivering results faster than traditional providers.',
    },
    {
      title: 'Client-Focused Growth',
      description:
        'We maintain a focused client portfolio to ensure personalized attention and exceptional service delivery for each project.',
    },
    {
      title: 'Technology Leadership',
      description:
        "Despite our early stage, we're already pushing boundaries in AI and cloud solutions, backed by our proven track record of successful implementations.",
    },
  ];
});

app.controller('GoalsController', function ($scope) {
  $scope.goals = [
    {
      title: 'Expand Client Success Stories',
      description:
        'Build on our initial success with enterprise clients by delivering more transformative solutions that demonstrate our capabilities.',
    },
    {
      title: 'Innovation Leadership',
      description:
        'Continue pushing technological boundaries while maintaining our perfect track record of successful project deliveries.',
    },
    {
      title: 'Strategic Growth',
      description:
        'Scale our operations thoughtfully to serve more clients while maintaining our high standards of personalized service and innovation.',
    },
    {
      title: 'Market Expansion',
      description:
        'Leverage our early success and $500K+ revenue milestone to expand our presence in key enterprise markets.',
    },
  ];
});

app.controller('LeadershipController', function ($scope) {
  $scope.leaders = [
    {
      name: 'John Smith',
      title: 'Chief Executive Officer',
      description:
        "With over 15 years of experience in enterprise technology, John leads our company's strategic vision and growth initiatives.",
    },
    {
      name: 'Sarah Johnson',
      title: 'Chief Technology Officer',
      description:
        'Sarah brings deep technical expertise in AI and machine learning, leading our technology strategy and innovation efforts.',
    },
    {
      name: 'Michael Chen',
      title: 'Head of Client Success',
      description:
        'Michael ensures our clients receive exceptional value from our solutions. His client-first approach has helped maintain our 100% client satisfaction rate.',
    },
    {
      name: 'Emily Rodriguez',
      title: 'Director of Innovation',
      description:
        'Emily leads our research and development initiatives, focusing on emerging technologies and their practical applications for enterprise clients.',
    },
  ];
});

app.controller('ContactController', function ($scope) {
  $scope.formData = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  $scope.submitForm = function () {
    // In a real application, this would send the data to a server
    console.log('Form submitted:', $scope.formData);
    alert('Thank you for your message. We will get back to you soon!');

    // Reset form
    $scope.formData = {
      name: '',
      email: '',
      company: '',
      message: '',
    };
  };
});
