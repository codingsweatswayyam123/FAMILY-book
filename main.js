 var images = 
["https://i.postimg.cc/MKdhy06Z/family.jpg","https://feelinganimatedblog.files.wordpress.com/2018/04/grandpa-bud.jpg",
"https://i.pinimg.com/originals/7e/cf/16/7ecf1629515f7cbf656b6d9508d3f0a3.jpg", "https://previews.123rf.com/images/tigatelu/tigatelu1612/tigatelu161200003/74992537-vector-illustration-of-cartoon-father-and-son-playing-together.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSexH5y95TqWWyjXk85dKlkotenRxqtInOW4g&usqp=CAU",
"https://previews.123rf.com/images/kakigori/kakigori1604/kakigori160400025/55482434-cute-teenager-girl-sitting-on-the-floor-with-laptop-computer-in-her-lap.jpg",
"https://image.shutterstock.com/image-illustration/boy-playing-cricket-260nw-343890824.jpg"];
            var names = ["Family Book","Shri Krishan Balyan", "Sheela Devi", "Sandeep Balyan", "Sarita Pandey", "Saanvee Balyan", "Swayyam Balyan"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 6
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }
