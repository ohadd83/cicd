pipeline {
    agent any

    environment {
        IMAGE_NAME = "myapp"
        IMAGE_TAG  = "${BUILD_NUMBER}"
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker stop myapp || true
                    docker rm myapp || true
                    docker run -d -p 8083:3000 --name myapp $IMAGE_NAME:$IMAGE_TAG
                '''
            }
        }
    }

    post {
        always {
            cleanWs()
        }

        success {
            echo " Deployment successful!"
        }

        failure {
            echo " Pipeline failed"
        }
    }
}

