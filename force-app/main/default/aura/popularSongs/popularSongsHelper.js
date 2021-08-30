({
    doInit : function(component) {
        let bandName = component.get('v.bandName');
        let url1;
        let url2;
        let url3;
        let url4;
        let url5;
        let song1;
        let song2;
        let song3;
        let song4;
        let song5;
        if(bandName == 'BTS'){
            url1 = "https://www.musixmatch.com/lyrics/BTS/Dynamite";
            url2 = "https://www.musixmatch.com/lyrics/BTS-%E9%98%B2%E5%BC%BE%E5%B0%91%E5%B9%B4%E5%9B%A3-feat-Halsey/Boy-With-Luv";
            url3 = "https://www.musixmatch.com/lyrics/BTS/Butter";
            url4 = "https://www.musixmatch.com/lyrics/BTS-12/Permission-to-Dance";
            url5 = "https://www.musixmatch.com/lyrics/BTS/Stay-Gold";
            song1 = "Dynamite";
            song2 = "Boy With Luv";
            song3 = "Butter";
            song4 = "Permission to Dance";
            song5 = "Stay Gold";          
        } else if(bandName == 'Blackpink'){
            url1 = "https://www.musixmatch.com/lyrics/Blackpink/How-You-Like-That";
            url2 = "https://www.musixmatch.com/lyrics/Blackpink/Kill-This-Love";
            url3 = "https://www.musixmatch.com/lyrics/Blackpink/AS-IF-IT-S-YOUR-LAST-KR-Ver-";
            url4 = "https://www.musixmatch.com/lyrics/Blackpink/Pretty-Savage";
            url5 = "https://www.musixmatch.com/lyrics/Blackpink/Lovesick-Girls";
            song1 = "How You Like That";
            song2 = "Kill This Love";
            song3 = "As If It's Your Last";
            song4 = "Pretty Savage";
            song5 = "Lovesick Girls";         
        } else {
            url1 = "https://www.musixmatch.com/lyrics/Stray-Kids/Side-Effects";
            url2 = "https://www.musixmatch.com/lyrics/Stray-Kids/Maze-of-Memories";
            url3 = "https://www.musixmatch.com/lyrics/Stray-Kids/Booster";
            url4 = "https://www.musixmatch.com/lyrics/Stray-Kids/Hello-Stranger";
            url5 = "https://www.musixmatch.com/lyrics/Stray-Kids/Chronosaurus";
            song1 = "Side Effects";
            song2 = "Maze of Memories";
            song3 = "Booster";
            song4 = "Hello Stranger";
            song5 = "Chronosaurus";       
        }
        component.set('v.url1', url1);
        component.set('v.url2', url2);
        component.set('v.url3', url3);
        component.set('v.url4', url4);
        component.set('v.url5', url5);
        component.set('v.song1', song1);
        component.set('v.song2', song2);
        component.set('v.song3', song3);
        component.set('v.song4', song4);
        component.set('v.song5', song5);
    }
})