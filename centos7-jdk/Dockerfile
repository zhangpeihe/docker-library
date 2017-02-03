FROM centos:centos7
MAINTAINER xiaomengweihan "xiaomengweihan@qq.com"

#https://github.com/docker-library/official-images/blob/master/library/centos

#安装JDK
RUN yum -y update && yum clean all
RUN yum install -y wget tar zip && yum clean all
RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u65-b17/jdk-8u65-linux-x64.rpm  && rpm -ivh jdk-8u65-linux-x64.rpm && rm -rf jdk-8u65-linux-x64.rpm

RUN yum install netstat
RUN yun install telnet

#设置环境变量
ENV JAVA_HOME /usr/java/jdk1.8.0_65
ENV PATH $JAVA_HOME/bin:$PATH
