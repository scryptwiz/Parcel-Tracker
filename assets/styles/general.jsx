import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    innerCont: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        gap: 10,
    },
    tBlack: {
        color: "#000",
    },
    redirButton: {
        backgroundColor: '#f00',
        padding: 10,
        borderRadiuss: 5,
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    notFoundCont: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
        gap: 25,
    },
    notFoundTitle: {
        fontSize: 32,
        fontWeight: "bold",
    },
    notFoundNormal: {
        fontSize: 14,
        color: "#666",
    },
    alignCenter: {
        alignItems: "center",
        textAlign: "center",
    },
    notFoundBtn: {
        backgroundColor: "#000",
        color: "#fff",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        alignItems: "center",
        alignSelf: "flex-start",
        marginHorizontal: "auto",
        marginTop: 25,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
    }
})