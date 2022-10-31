async function api_test() {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        let posts = await res.json();
        
        let title = posts.map(posts => posts.title);
        title
        .filter(title => title.split(' ').length > 6)
        .forEach(title => console.log(title))
    }
    catch(error)
    {
        console.log(error)
    }
}

async function wordcount(){
    try
    {
        let title_count = await fetch('https://jsonplaceholder.typicode.com/posts')
                                .then(res => res.json())
                                .then(res => res.map(res => res.body))
                              
        let word_count = title_count.toString();

        var words = word_count.split(' ');
        var MapCount = {};
        words.forEach(function(w) {
            if (!MapCount[w]) {
                MapCount[w] = 0;
            }
            MapCount[w] += 1;
        });
        console.log(MapCount)
    } 
    catch(error) 
    {
      console.log(error)
    }
}


api_test();
wordcount();