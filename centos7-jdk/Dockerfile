FROM centos
MAINTAINER jason "xiaomengweihan@qq.com"

#安装JDK
RUN mkdir /opt/jdk
RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie"  -P /opt/jdk http://download.oracle.com/otn-pub/java/jdk/8u111-b14/jdk-8u111-linux-x64.tar.gz
RUN tar xzf /opt/jdk/jdk-8u111-linux-x64.tar.gz -C /opt/jdk
RUN rm -rf /opt/jdk/jdk-8u111-linux-x64.tar.gz

#设置环境变量
ENV JAVA_HOME /opt/jdk/jdk1.8.0_111
ENV PATH $JAVA_HOME/bin:$PATH
