import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';

const cesta = {
  nome: 'Cesta de Verduras',
  fazenda: 'Fazenda Boa Terra',
  preco: 'R$ 40,00',
  imagemFazenda:
    'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
  itens: [
    {
      id: '1',
      nome: 'Alface',
      imagem:
        'https://images.unsplash.com/photo-1622205313162-be1d5712a43b?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: '2',
      nome: 'Tomate',
      imagem:
        'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: '3',
      nome: 'Cenoura',
      imagem:
        'https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: '4',
      nome: 'Batata',
      imagem:
        'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=300&q=80',
    },
  ],
};

export default function App( ) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cesta.itens}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <Text style={styles.titulo}>{cesta.nome}</Text>
            <Text style={styles.subtitulo}>{cesta.fazenda}</Text>

            <Image
              source={{ uri: cesta.imagemFazenda }}
              style={styles.imagemFazenda}
            />

            <Text style={styles.preco}>{cesta.preco}</Text>
            <Text style={styles.itensTitulo}>Itens da cesta:</Text>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imagem }} style={styles.itemImagem} />
            <Text style={styles.item}>{item.nome}</Text>
          </View>
        )}
        contentContainerStyle={styles.conteudo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAF5',
  },
  conteudo: {
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#245C2A',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 18,
    color: '#555',
    marginBottom: 15,
  },
  imagemFazenda: {
    width: '100%',
    height: 200,
    borderRadius: 14,
    marginBottom: 15,
  },
  preco: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
  },
  itensTitulo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  itemImagem: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 8,
  },
  item: {
    fontSize: 18,
    color: '#333',
  },
});
