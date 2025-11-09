import {
  Select,
  SelectItem,
  SelectSection,
} from "@/registry/new-york/ui/select"

export default function SelectScrollable() {
  return (
    <Select
      label="Timezone"
      placeholder="Select a timezone"
      className="w-[280px]"
    >
      <SelectSection title="North America">
        <SelectItem id="est">Eastern Standard Time (EST)</SelectItem>
        <SelectItem id="cst">Central Standard Time (CST)</SelectItem>
        <SelectItem id="mst">Mountain Standard Time (MST)</SelectItem>
        <SelectItem id="pst">Pacific Standard Time (PST)</SelectItem>
        <SelectItem id="akst">Alaska Standard Time (AKST)</SelectItem>
        <SelectItem id="hst">Hawaii Standard Time (HST)</SelectItem>
      </SelectSection>
      <SelectSection title="Europe & Africa">
        <SelectItem id="gmt">Greenwich Mean Time (GMT)</SelectItem>
        <SelectItem id="cet">Central European Time (CET)</SelectItem>
        <SelectItem id="eet">Eastern European Time (EET)</SelectItem>
        <SelectItem id="west">Western European Summer Time (WEST)</SelectItem>
        <SelectItem id="cat">Central Africa Time (CAT)</SelectItem>
        <SelectItem id="eat">East Africa Time (EAT)</SelectItem>
      </SelectSection>
      <SelectSection title="Asia">
        <SelectItem id="msk">Moscow Time (MSK)</SelectItem>
        <SelectItem id="ist">India Standard Time (IST)</SelectItem>
        <SelectItem id="cst_china">China Standard Time (CST)</SelectItem>
        <SelectItem id="jst">Japan Standard Time (JST)</SelectItem>
        <SelectItem id="kst">Korea Standard Time (KST)</SelectItem>
        <SelectItem id="ist_indonesia">
          Indonesia Central Standard Time (WITA)
        </SelectItem>
      </SelectSection>
      <SelectSection title="Australia & Pacific">
        <SelectItem id="awst">
          Australian Western Standard Time (AWST)
        </SelectItem>
        <SelectItem id="acst">
          Australian Central Standard Time (ACST)
        </SelectItem>
        <SelectItem id="aest">
          Australian Eastern Standard Time (AEST)
        </SelectItem>
        <SelectItem id="nzst">New Zealand Standard Time (NZST)</SelectItem>
        <SelectItem id="fjt">Fiji Time (FJT)</SelectItem>
      </SelectSection>
      <SelectSection title="South America">
        <SelectItem id="art">Argentina Time (ART)</SelectItem>
        <SelectItem id="bot">Bolivia Time (BOT)</SelectItem>
        <SelectItem id="brt">Brasilia Time (BRT)</SelectItem>
        <SelectItem id="clt">Chile Standard Time (CLT)</SelectItem>
      </SelectSection>
    </Select>
  )
}
