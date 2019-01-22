package com.qa.persistence.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Character {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;
	private String name;
	private String race;
	private String characterClass;
	private String background;
	private int level;
	private String subClass;
	private String spells;
	private int strength;
	private int dexterity;
	private int constitution;
	private int intelligence;
	private int wisdom;
	private int charisma;
	private Boolean acrobatics;
	private Boolean animalHandling;
	private Boolean arcana;
	private Boolean athletics;
	private Boolean deception;
	private Boolean history;
	private Boolean insight;
	private Boolean intimidation;
	private Boolean investigation;
	private Boolean medicine;
	private Boolean nature;
	private Boolean perception;
	private Boolean performance;
	private Boolean persausion;
	private Boolean religion;
	private Boolean sleightOfHand;
	private Boolean stealth;
	private Boolean survival;

	public Character() {

	}

	public Character(Long id, String name, String race, String characterClass, String background, int level,
			String subClass, String spells, int strength, int dexterity, int constitution, int intelligence, int wisdom,
			int charisma, Boolean acrobatics, Boolean animalHandling, Boolean arcana, Boolean athletics,
			Boolean deception, Boolean history, Boolean insight, Boolean intimidation, Boolean investigation,
			Boolean medicine, Boolean nature, Boolean perception, Boolean performance, Boolean persausion,
			Boolean religion, Boolean sleightOfHand, Boolean stealth, Boolean survival) {
		super();
		this.id = id;
		this.name = name;
		this.race = race;
		this.characterClass = characterClass;
		this.background = background;
		this.level = level;
		this.subClass = subClass;
		this.spells = spells;
		this.strength = strength;
		this.dexterity = dexterity;
		this.constitution = constitution;
		this.intelligence = intelligence;
		this.wisdom = wisdom;
		this.charisma = charisma;
		this.acrobatics = acrobatics;
		this.animalHandling = animalHandling;
		this.arcana = arcana;
		this.athletics = athletics;
		this.deception = deception;
		this.history = history;
		this.insight = insight;
		this.intimidation = intimidation;
		this.investigation = investigation;
		this.medicine = medicine;
		this.nature = nature;
		this.perception = perception;
		this.performance = performance;
		this.persausion = persausion;
		this.religion = religion;
		this.sleightOfHand = sleightOfHand;
		this.stealth = stealth;
		this.survival = survival;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRace() {
		return race;
	}

	public void setRace(String race) {
		this.race = race;
	}

	public String getCharacterClass() {
		return characterClass;
	}

	public void setCharacterClass(String characterClass) {
		this.characterClass = characterClass;
	}

	public String getBackground() {
		return background;
	}

	public void setBackground(String background) {
		this.background = background;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public String getSubClass() {
		return subClass;
	}

	public void setSubClass(String subClass) {
		this.subClass = subClass;
	}

	public String getSpells() {
		return spells;
	}

	public void setSpells(String spells) {
		this.spells = spells;
	}

	public int getStrength() {
		return strength;
	}

	public void setStrength(int strength) {
		this.strength = strength;
	}

	public int getDexterity() {
		return dexterity;
	}

	public void setDexterity(int dexterity) {
		this.dexterity = dexterity;
	}

	public int getConstitution() {
		return constitution;
	}

	public void setConstitution(int constitution) {
		this.constitution = constitution;
	}

	public int getIntelligence() {
		return intelligence;
	}

	public void setIntelligence(int intelligence) {
		this.intelligence = intelligence;
	}

	public int getWisdom() {
		return wisdom;
	}

	public void setWisdom(int wisdom) {
		this.wisdom = wisdom;
	}

	public int getCharisma() {
		return charisma;
	}

	public void setCharisma(int charisma) {
		this.charisma = charisma;
	}

	public Boolean getAcrobatics() {
		return acrobatics;
	}

	public void setAcrobatics(Boolean acrobatics) {
		this.acrobatics = acrobatics;
	}

	public Boolean getAnimalHandling() {
		return animalHandling;
	}

	public void setAnimalHandling(Boolean animalHandling) {
		this.animalHandling = animalHandling;
	}

	public Boolean getArcana() {
		return arcana;
	}

	public void setArcana(Boolean arcana) {
		this.arcana = arcana;
	}

	public Boolean getAthletics() {
		return athletics;
	}

	public void setAthletics(Boolean athletics) {
		this.athletics = athletics;
	}

	public Boolean getDeception() {
		return deception;
	}

	public void setDeception(Boolean deception) {
		this.deception = deception;
	}

	public Boolean getHistory() {
		return history;
	}

	public void setHistory(Boolean history) {
		this.history = history;
	}

	public Boolean getInsight() {
		return insight;
	}

	public void setInsight(Boolean insight) {
		this.insight = insight;
	}

	public Boolean getIntimidation() {
		return intimidation;
	}

	public void setIntimidation(Boolean intimidation) {
		this.intimidation = intimidation;
	}

	public Boolean getInvestigation() {
		return investigation;
	}

	public void setInvestigation(Boolean investigation) {
		this.investigation = investigation;
	}

	public Boolean getMedicine() {
		return medicine;
	}

	public void setMedicine(Boolean medicine) {
		this.medicine = medicine;
	}

	public Boolean getNature() {
		return nature;
	}

	public void setNature(Boolean nature) {
		this.nature = nature;
	}

	public Boolean getPerception() {
		return perception;
	}

	public void setPerception(Boolean perception) {
		this.perception = perception;
	}

	public Boolean getPerformance() {
		return performance;
	}

	public void setPerformance(Boolean performance) {
		this.performance = performance;
	}

	public Boolean getPersausion() {
		return persausion;
	}

	public void setPersausion(Boolean persausion) {
		this.persausion = persausion;
	}

	public Boolean getReligion() {
		return religion;
	}

	public void setReligion(Boolean religion) {
		this.religion = religion;
	}

	public Boolean getSleightOfHand() {
		return sleightOfHand;
	}

	public void setSleightOfHand(Boolean sleightOfHand) {
		this.sleightOfHand = sleightOfHand;
	}

	public Boolean getStealth() {
		return stealth;
	}

	public void setStealth(Boolean stealth) {
		this.stealth = stealth;
	}

	public Boolean getSurvival() {
		return survival;
	}

	public void setSurvival(Boolean survival) {
		this.survival = survival;
	}

}