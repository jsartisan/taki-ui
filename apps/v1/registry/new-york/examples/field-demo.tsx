import { Button } from "@/registry/new-york/ui/button"
import { Checkbox } from "@/registry/new-york/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/new-york/ui/field"
import { Input } from "@/registry/new-york/ui/input"
import { Select, SelectItem } from "@/registry/new-york/ui/select"
import { Textarea } from "@/registry/new-york/ui/textarea"

export default function FieldDemo() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name on Card
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Card Number
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>
                  Enter your 16-digit card number
                </FieldDescription>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Select label="Month" defaultSelectedKey="">
                  <SelectItem id="01">01</SelectItem>
                  <SelectItem id="02">02</SelectItem>
                  <SelectItem id="03">03</SelectItem>
                  <SelectItem id="04">04</SelectItem>
                  <SelectItem id="05">05</SelectItem>
                  <SelectItem id="06">06</SelectItem>
                  <SelectItem id="07">07</SelectItem>
                  <SelectItem id="08">08</SelectItem>
                  <SelectItem id="09">09</SelectItem>
                  <SelectItem id="10">10</SelectItem>
                  <SelectItem id="11">11</SelectItem>
                  <SelectItem id="12">12</SelectItem>
                </Select>
                <Select label="Year" defaultSelectedKey="">
                  <SelectItem id="2024">2024</SelectItem>
                  <SelectItem id="2025">2025</SelectItem>
                  <SelectItem id="2026">2026</SelectItem>
                  <SelectItem id="2027">2027</SelectItem>
                  <SelectItem id="2028">2028</SelectItem>
                  <SelectItem id="2029">2029</SelectItem>
                </Select>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldDescription>
              The billing address associated with your payment method
            </FieldDescription>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox
                  id="checkout-7j9-same-as-shipping-wgm"
                  defaultChecked
                />
                <FieldLabel
                  htmlFor="checkout-7j9-same-as-shipping-wgm"
                  className="font-normal"
                >
                  Same as shipping address
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Comments
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
