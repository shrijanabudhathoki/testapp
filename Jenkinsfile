pipeline {
	agent any
	
	environment {
		APP_NAME = "testapp"
		NAMESPACE = "test"
	}
	
	stages {
		stage('Checkout') {
			steps {
				get 'https://github.com/shrijanabudhathoki/testapp.git'
			}
		}
		
		stage('Build Docker image'){
			steps {
				sh '''
					eval $(minikube docker-env)
					docker build -t $APP_NAME:build-$BUILD_NUMBER .
				'''
			}
		}
		
		stage('Deploy to Kubernetes'){
			steps {
				sh '''
					kubectl -n $NAMESPACE set image deployment/$APP_NAME $APP_NAME=$APP_NAME:build-$BUILD_NUMBER --record || \
					kubectl apply -f k8s/deployment.yml
					kubectl -n $NAMESPACE rollout status deployment/$APP_NAME
				'''
			}
		}
	}
}
