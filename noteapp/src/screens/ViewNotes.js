import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, FAB, List } from 'react-native-paper'
import Header from '../component/Header'
import { useSelector, useDispatch } from 'react-redux'
import { addnote, deletenote } from '../reducer/notesApp'

function ViewNotes({ navigation }) {
    const notes = useSelector(state => state)
    const dispatch = useDispatch()

    const addNote = note => {
        console.log(note)
        dispatch(addnote(note))
    }

    const deleteNote = id => dispatch(deletenote(id))

    return (
        <>
            <Header titleText='Notes' />
            <View style={styles.container}>
                {notes.length === 0 ? (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>You do not have any Notes</Text>
                    </View>
                ) : (
                    <FlatList
                        data={notes}
                        renderItem={({ item }) => (
                            <View style={styles.singlenote}>
                                <List.Item
                                    title={item.note.title}
                                    description={item.note.description}
                                    descriptionNumberOfLines={10}
                                    titleStyle={styles.listTitle}
                                    onPress={() => deleteNote(item.id)}
                                />
                                <View style={styles.date}>
                                    <Text>Date: {item.note.date}</Text>
                                </View>
                            </View>

                        )}
                        keyExtractor={item => item.id.toString()}

                    />
                )}

                <FAB
                    style={styles.fab}

                    icon='plus'
                    color='#fff'
                    onPress={() => navigation.navigate('AddNotes2', {
                        addNote
                    })
                    }
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    singlenote: {
        backgroundColor: '#F4F4F7',
        borderRadius: 8,
        marginTop: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    title: {
        fontSize: 20
    },
    fab: {
        backgroundColor: '#222222',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10,
    },
    listTitle: {
        fontSize: 20
    },

    date: {
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#F4F4F7',
        paddingHorizontal: 15,
        marginBottom: 16,
    }

})

export default ViewNotes