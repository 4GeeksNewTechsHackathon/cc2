import Reflux from 'reflux';
import $ from 'jquery';
import DataActions from '../actions/DataActions';

var DataStore = Reflux.createStore({

    playersData: '',
    init: function() {
        this.fetchData();
    },
    sourceUrl: 'http://',
    listenables: [DataActions],
    fetchData: function(){
        // $.ajax({
        //     url: this.sourceUrl + `&tag=${randomTag}`,
        //     dataType: 'jsonp',
        //     jsonpCallback: 'jsonFlickrFeed',
        //     cache: false,
        //     context: this,
        //     success: function(data) {
        //         console.log('fetch complete');
        //         this.data = data.items;
        //         this.trigger(this.data);
        //     }
        // });
        this.playersData = [{name:'Nabila Diaz', points: '110', picture: 'images/player.png'}, {name:'Marlon Maldonado', points: '200', picture: 'images/profile.jpg'}, {name:'Hendrix Roa', points: '150', picture: 'images/profile.jpg'}]
        this.trigger(this.playersData);console.log(this.playersData);
    }
});

export default DataStore;
