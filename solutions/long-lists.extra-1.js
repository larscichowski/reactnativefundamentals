import React from "react";
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 1,
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgb(170, 170, 170))",
  },
});

const groupPeopleByLastName = (_data) => {
  const data = [..._data];
  const groupedData = data.reduce((accumulator, item) => {
    const group = item.name.last[0].toUpperCase();

    if (accumulator[group]) {
      accumulator[group].data.push(item);
    } else {
      accumulator[group] = {
        title: group,
        data: [item],
      };
    }

    return accumulator;
  }, {});

  const sections = Object.keys(groupedData).map((key) => {
    return groupedData[key];
  });

  return sections.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    return -1;
  });
};

export default () => {
  return (
    <SafeAreaView>
      <SectionList
        sections={groupPeopleByLastName(PEOPLE)}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderSectionHeader={({ section }) => {
          return (
            <View style={styles.sectionHeader}>
              <Text>{section.title}</Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.name}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const PEOPLE = [
  {
    name: {
      title: "Ms",
      first: "Maeva",
      last: "Scott",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Ma??lle",
      last: "Henry",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Mohamoud",
      last: "Faaij",
    },
  },
  {
    name: {
      title: "Monsieur",
      first: "Carmelo",
      last: "Meunier",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Peyton",
      last: "Garcia",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Godofreda",
      last: "Caldeira",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Kristin",
      last: "White",
    },
  },
  {
    name: {
      title: "Miss",
      first: "X??nia",
      last: "da Cruz",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Christl",
      last: "Schwinn",
    },
  },
  {
    name: {
      title: "Mademoiselle",
      first: "??dith",
      last: "Hubert",
    },
  },
  {
    name: {
      title: "Monsieur",
      first: "Tobias",
      last: "David",
    },
  },
  {
    name: {
      title: "Mr",
      first: "V??in??",
      last: "Tervo",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Susanne",
      last: "Peters",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Ariane",
      last: "Gagnon",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Warren",
      last: "Graham",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Corey",
      last: "Price",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Milian",
      last: "Tufte",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Johan",
      last: "Renard",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Brand",
      last: "Van Meijl",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Kasper",
      last: "Kivela",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Harley",
      last: "Martin",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Aapo",
      last: "Niemela",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Carol",
      last: "Williams",
    },
  },
  {
    name: {
      title: "Miss",
      first: "????????",
      last: "??????????",
    },
  },
  {
    name: {
      title: "Mr",
      first: "????????????????",
      last: "?????????? ??????",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Mauritz",
      last: "Musch",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Andrea",
      last: "Austin",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Murat",
      last: "Kutlay",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Nanneke",
      last: "Ermers",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Jayden",
      last: "Anderson",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Nejla",
      last: "Van Riet",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Heather",
      last: "Hudson",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Maria",
      last: "Wright",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Edelmira",
      last: "Nogueira",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Concepcion",
      last: "Santana",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Andrea",
      last: "Knight",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Julie",
      last: "Pedersen",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Renata",
      last: "Kautz",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Samanta",
      last: "Groenveld",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "????????",
      last: "???????????? ????????",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Apolline",
      last: "David",
    },
  },
  {
    name: {
      title: "Mr",
      first: "????????",
      last: "????????",
    },
  },
  {
    name: {
      title: "Mr",
      first: "????????",
      last: "??????????",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Gina",
      last: "Sunde",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Louella",
      last: "Gibson",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Jar",
      last: "Foster",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Jackson",
      last: "Green",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Jesse",
      last: "Ketola",
    },
  },
  {
    name: {
      title: "Madame",
      first: "Zoe",
      last: "Dupont",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Till",
      last: "K??gler",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Bab??r",
      last: "Ayka??",
    },
  },
  {
    name: {
      title: "Mr",
      first: "??????????",
      last: "??????????",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Aliya",
      last: "Brudevoll",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Isobel",
      last: "Anderson",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Alice",
      last: "C??t??",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Josep",
      last: "Velasco",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Joshua",
      last: "Saur",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Alida",
      last: "Sollid",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Jonathan",
      last: "Willis",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Adriel",
      last: "Barros",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Charlotte",
      last: "Gerard",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Amelia",
      last: "Clarke",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Magnus",
      last: "Senf",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Yolanda",
      last: "Mu??oz",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Susan",
      last: "Hill",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Andira",
      last: "Sales",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Victor",
      last: "Moore",
    },
  },
  {
    name: {
      title: "Monsieur",
      first: "Mauro",
      last: "Thomas",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Ege",
      last: "G??nday",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Enrique",
      last: "White",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Nathaniel",
      last: "Silva",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Sandor",
      last: "Stroh",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Frida",
      last: "Pedersen",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Marta",
      last: "Silva",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Leander",
      last: "Bergquist",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Niklas",
      last: "Hakala",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Matias",
      last: "Pietila",
    },
  },
  {
    name: {
      title: "Ms",
      first: "C??lia",
      last: "Simon",
    },
  },
  {
    name: {
      title: "Mr",
      first: "James",
      last: "Walker",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Elif",
      last: "K??ra??",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Kati",
      last: "Schorr",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Lucas",
      last: "Pedersen",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Bab??r",
      last: "Be??ok",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Yael",
      last: "De Vegt",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Claudia",
      last: "Bishop",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Sophie",
      last: "Garcia",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Warren",
      last: "Kim",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Alison",
      last: "Morris",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Alexia",
      last: "Leroy",
    },
  },
  {
    name: {
      title: "Ms",
      first: "??????",
      last: "??????????",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Susanna",
      last: "Moore",
    },
  },
  {
    name: {
      title: "Mademoiselle",
      first: "Nelli",
      last: "Robert",
    },
  },
  {
    name: {
      title: "Miss",
      first: "??????????",
      last: "?????????? ??????",
    },
  },
  {
    name: {
      title: "Ms",
      first: "??????????",
      last: "???????????? ????????",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Kornelius",
      last: "R??yland",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Arcanjo",
      last: "Nogueira",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Dursun",
      last: "Reiss",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "V??r",
      last: "Sletteb??",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Luis",
      last: "Owens",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Ryder",
      last: "Ennis",
    },
  },
];
