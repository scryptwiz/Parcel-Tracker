import {Link} from "expo-router";
import {Image, Text, View} from "react-native";
import {styles} from "../assets/styles/general";
import {images} from "../constants";

export default function NotFoundScreen() {
    return (
        <>
            <View style={styles.notFoundCont}>
                <Image
                    source={images.NotFoundServer}
                    style={{width: 220, height: 200}}
                />
                <View style={[{marginTop: 25}, styles.alignCenter]}>
                    <Text style={styles.notFoundTitle}>uh-oh.</Text>
                    <Text style={styles.notFoundTitle}>Page not found.</Text>
                </View>
                <View style={[{gap: 7}, styles.alignCenter]}>
                    <Text style={styles.notFoundNormal}>Sorry, the page you requested could not be found.</Text>
                    <Text style={styles.notFoundNormal}>Please go back to homepage.</Text>
                </View>
                <Link href="/" style={styles.notFoundBtn}>
                    <Text>Back to Home</Text>
                </Link>
            </View>
        </>
    );
}