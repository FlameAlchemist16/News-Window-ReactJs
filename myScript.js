let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ZqoLszSpxksppKS1U9wn2Mlx6aNbpOk5";
async function getNews() {
    let final_data;
    await fetch(url)
        .then(data => data.json())
        .then(data => {
            final_data = data;
        });
    console.log(final_data);
    let num = final_data['num_results'];
    let t=0, j=0,l=0;
    let a= [1,3,6,8,9,11];
    let b= [2,4,5,7,10,12];
    for(let i =0;i<num;i++){
        if(t>11){
            break;
        }
        if(i+1 === b[l]){
            document.getElementById('heading'+b[l]).innerHTML = final_data['results'][t]['title'];
            document.getElementById('des'+b[l]).innerHTML = final_data['results'][t]['abstract'];
            l++;
        }
        else{
            document.getElementById('img'+a[j]).src = final_data['results'][t]['multimedia'][1]['url'];
            document.getElementById('heading'+a[j]).innerHTML = final_data['results'][t]['title'];
            document.getElementById('des'+a[j]).innerHTML = final_data['results'][t]['abstract'];
            j++;
        }
        t++;
    }
}
getNews();