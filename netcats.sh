printf "\033c\033[43;30m\n"
echo press enter
while read a
do
	echo $a > out.txt
	netcat $1 8080 < out.txt
	echo " "
done
