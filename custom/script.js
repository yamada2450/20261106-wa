Vue.createApp({
  data() {
    return {
      score: 75,
      standards: [
        {
          min: 90,
          max: 101,
          range: "90〜100点",
          grade: "A",
          status: "満店",
          color: "grade-a",
          advice: "非常に優秀な店舗です。この調子で営業を続けましょう。"
        },
        
        {
          min: 80,
          max: 90,
          range: "80〜89点",
          grade: "B",
          status: "優秀なお店",
          color: "grade-b",
          advice: "良好な店舗です。小さなタスクにも目を配りより良い店舗を目指しましょう。"
        },
        
        {
          min: 70,
          max: 80,
          range: "70〜79点",
          grade: "c",
          status: "優良店",
          color: "grade-c",
          advice: "一般的な店舗です。コツコツと集客をしてより良い営業成績をとれるように頑張りましょう。"
        },
        
        {
          min: 60,
          max: 70,
          range: "60〜69点",
          grade: "d",
          status: "一般的なお店",
          color: "grade-d",
          advice: "コツコツと集客をしてより良い営業成績をとれるように頑張りましょう。"
        },
        
        {
          min: 0,
          max: 60,
          range: "0〜59点",
          grade: "F",
          status: "ダメなお店",
          color: "grade-f",
          advice: "設備不備。まずはしょう。"
        },
        
      ]
    };
  },

  computed: {
  
    currentStandard() {
      return this.standards.find(item =>
        this.score >= item.min && this.score < item.max
      );
    },

    grade() {
      return this.currentStandard?.grade || "－";
    },

    status() {
      return this.currentStandard?.status || "判定できません";
    },

    advice() {
      return this.currentStandard?.advice || "0〜100の範囲で点数を入力してください。";
    },

    differenceMessage() {
      const difference = 60 - this.score;

      if (difference > 0) {
        return `合格ラインまであと${difference}点です`;
      }

      return "合格ラインをクリアしています";
    }
  }
}).mount("#app");