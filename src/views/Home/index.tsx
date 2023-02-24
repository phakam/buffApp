import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import TextBox from '../../components/TextBox';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const holder = [];
    for (let i = 1; i <= 1000; i++) {
      if (i % 5 === 0) {
        holder.push({name: 'beep', color: '#DFFF00'});
      }
      if (i % 20 === 0) {
        holder.push({name: 'boop', color: '#FFA500'});
      }

      if (i % 100 === 0) {
        holder.push({name: 'beep boop', color: '#89CFF0'});
      }
    }
    setData(holder);
  };

  console.log("ddd", data)

  return (
    <SafeAreaView style={styles.container}>
      {data && data.length ? (
        <FlatList
          data={data}
          numColumns={3}
          renderItem={({item}) => {
            return <TextBox color={item.color} name={item.name} />;
          }}
          keyExtractor={(item, index) => String(index)}
        />
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#161722'
  },
});

export default Home;
